using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Post: BaseEntities
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
