using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Application.Services;

namespace Azure.Services
{
    public class AzureBlobService : IAzureBlobService
    {
        private readonly string _azureStorageConnectionString;

        public AzureBlobService(string azureStorageConnectionString)
        {
            _azureStorageConnectionString = azureStorageConnectionString;
        }

        public async Task<string> GetBlobImageAsBase64Async(string blobUrl)
        {
            try
            {
                BlobServiceClient blobServiceClient = new BlobServiceClient(_azureStorageConnectionString);

                Uri url = new Uri(blobUrl);
                string containerName = url.Segments[1];
                string blobName = url.Segments[2] + url.Segments[3];

                BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
                BlobClient blobClient = containerClient.GetBlobClient(blobName);

                BlobDownloadInfo blobDownloadInfo = await blobClient.DownloadAsync();

                using (MemoryStream ms = new MemoryStream())
                {
                    await blobDownloadInfo.Content.CopyToAsync(ms);
                    byte[] blobContent = ms.ToArray();

                    return "data:image/jpeg;base64," + Convert.ToBase64String(blobContent);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao baixar a imagem do blob: {ex.Message}");
                throw;
            }
        }
    }
}
