using System;
using BTCSocial.Domain.Common;

namespace BTCSocial.Domain.Entities
{
    public class Story : AuditableEntity
    {
        public Guid Id { get; set; }

        public string StoryText { get; set; }
    }
}