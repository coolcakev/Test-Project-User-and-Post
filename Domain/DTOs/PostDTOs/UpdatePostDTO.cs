﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.PostDTOs
{
    public class UpdatePostDTO
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public string Title { get; set; }
    }
}
