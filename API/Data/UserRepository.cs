using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class UserRepository(DataContext context, IMapper mapper) : IUserRepository
{
    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await context.Users
        .Include(x => x.Photos) // Assuming AppUser has a collection of Photos
        .ToListAsync();
        // Assuming context.Users is a DbSet<AppUser>
    }

    public async Task<AppUser?> GetUserByIdAsync(int id)
    {
        return await context.Users.FindAsync(id);
        // Assuming context.Users is a DbSet<AppUser>
    }

    public async Task<AppUser?> GetUserByUsernameAsync(string username)
    {
        return await context.Users
        .Include(x => x.Photos) // Assuming AppUser has a collection of Photos
        .SingleOrDefaultAsync(x => x.UserName == username);
    }

    public async Task<bool> SaveChangesAsync()
    {
       return await context.SaveChangesAsync() > 0;
        // Returns true if any changes were saved to the database
    }

    public void Update(AppUser user)
    {
        context.Entry(user).State = EntityState.Modified;
        // Marks the user entity as modified so that it will be updated in the database
    }

    public async Task<IEnumerable<MemberDto>> GetMembersAsync()
    {
        return await context.Users
            .ProjectTo<MemberDto>(mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<MemberDto?> GetMemberAsync(string username)
    {
        return await context.Users
            .Where(x => x.UserName == username)
            .ProjectTo<MemberDto>(mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
    }
}
