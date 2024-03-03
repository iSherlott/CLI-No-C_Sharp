namespace Application.Services
{
    public interface IAzureBlobService
    {
        Task<string> GetBlobImageAsBase64Async(string blobUrl);
    }
}
