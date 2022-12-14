using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class User: BaseEntities
    {      
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string Street { get; set; }
        public string Suite { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public List<Post> Posts { get; set; }
    }

}
