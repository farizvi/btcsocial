using BTCSocial.Application.Common.Interfaces;
using System;

namespace BTCSocial.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}