using ContactManagementAPI.Data;
using ContactManagementAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ContactContext _context;

        public ContactsController(ContactContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Contact>> GetContacts()
        {
            return _context.GetContacts();
        }

        [HttpGet("{id}")]
        public ActionResult<Contact> GetContact(int id)
        {
            var contact = _context.GetContacts().FirstOrDefault(c => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        [HttpPost]
        public ActionResult<Contact> CreateContact(Contact contact) 
        {
            var contacts = _context.GetContacts();
            contact.Id = contacts.Any() ? contacts.Max(x => x.Id) + 1 : 1;

            contacts.Add(contact);
            _context.SaveContacts(contacts);

            return CreatedAtAction(nameof(GetContact), new { id = contact.Id }, contact);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateContact(int id, Contact contact)
        {
            if(id != contact.Id)
            {
                return BadRequest();
            }

            var contacts = _context.GetContacts();
            var existingContacts = contacts.FirstOrDefault(c=>c.Id== id);
            if (existingContacts == null)
            {
                return NotFound();
            }

            existingContacts.FirstName = contact.FirstName;
            existingContacts.LastName = contact.LastName;
            existingContacts.Email = contact.Email;

            _context.SaveContacts(contacts);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var contacts = _context.GetContacts();
            var contact = contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }

            contacts.Remove(contact);
            _context.SaveContacts(contacts);
            return NoContent();
        }
    }
}
