using System.ComponentModel.DataAnnotations.Schema;

namespace mf.domain.Entities
{
    public class MinecraftEntity : BaseEntity
    {
        public guid uuid { get; set; }
        public string discord { get; set; }
        public void setUsername(string username) { this.username = username; }
        public void setTag(string tag) { this.tag = tag; }
        public void setWallet(int wallet) { this.wallet = wallet; }
        public void setActive(bool active) { this.active = active; }
    }
}