// Public, build-time site configuration driven by environment variables.
// NEXT_PUBLIC_ prefix is required so these values are available in client components.

// Hide the resume button across the site (useful when deploying multiple variants
// of the portfolio that each link to a different, role-specific resume).
export const showResume: boolean = process.env.NEXT_PUBLIC_HIDE_RESUME !== 'true';
