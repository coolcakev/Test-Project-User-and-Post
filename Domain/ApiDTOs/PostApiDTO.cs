using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ApiDTOs
{
    public class PostApiDTO
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public string Title { get; set; }
    }
}
