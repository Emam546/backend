/* eslint-disable node/no-process-env */
export const domain = "";
export const permTime = process.env.NEXT_PUBLIC_PERM_TIME
    ? parseInt(process.env.NEXT_PUBLIC_PERM_TIME) || 1800000
    : 1800000;
