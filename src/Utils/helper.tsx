// All Helper functions should be exported from here
export function shortenAddress(address: string, chars = 8): string {
    if (typeof address !== 'string') {
        throw new Error('Address must be a string');
    }

    return `${address?.substring(0, chars + 2)}...${address?.substring(address.length - chars)}`;
}