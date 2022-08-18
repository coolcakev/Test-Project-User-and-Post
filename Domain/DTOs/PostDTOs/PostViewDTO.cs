using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.PostDTOs
{
    public class PostViewDTO
    {
        public string Title { get; set; }
        public string Body { get; set; }

        public SelectDTO User { get; set; }
    }
}
