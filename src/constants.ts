export const domain = process.env.NEXT_PUBLIC_BACKEND_SERVER;
export const permTime = process.env.NEXT_PUBLIC_PERM_TIME
    ? parseInt(process.env.NEXT_PUBLIC_PERM_TIME) || 1800000
    : 1800000;
