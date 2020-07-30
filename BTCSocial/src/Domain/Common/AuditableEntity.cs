using System;

namespace BTCSocial.Domain.Common
{
    public abstract class AuditableEntity
    {
        public DateTime Created { get; set; }
    }
}