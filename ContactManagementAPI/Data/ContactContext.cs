using ContactManagementAPI.Models;
using System.Text.Json;

namespace ContactManagementAPI.Data
{
    public class ContactContext
    {
        private readonly string _filePath;

        public ContactContext(IHostEnvironment environment)
        {
            _filePath = Path.Combine(environment.ContentRootPath, "contacts.json");
            if (!File.Exists(_filePath))
            {
                File.WriteAllText(_filePath, "[]");
            }
        }

        public List<Contact> GetContacts()
        {
            var jsonData = File.ReadAllText(_filePath);
            return JsonSerializer.Deserialize<List<Contact>>(jsonData);
        }

        public void SaveContacts(List<Contact> contacts)
        {
            var jsonData = JsonSerializer.Serialize(contacts);
            File.WriteAllText(_filePath, jsonData);
        }
    }
}
