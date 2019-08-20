using IdentityServer4.Stores;
using System.Threading.Tasks;

namespace AuthServer.Extensions
{
    public static class ClientStoreExtensions
    {
        public static async Task<bool> IsPkceClientAsync(
            this IClientStore store, string clientId)
        {
            if (!string.IsNullOrWhiteSpace(clientId))
            {
                var client = await store.FindEnabledClientByIdAsync(clientId);
                return client?.RequirePkce == true;
            }
            return false;
        }
    }
}
