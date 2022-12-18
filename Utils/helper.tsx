export enum animationDuration {
    SHORT = 500,
    MEDIUM = 800,
    LARGE = 1000,
    XLARGE = 2000,
    XXLARGE = 3000,
}


export function userBalanceAmount(balance: number, showSign = false) {
    return (showSign && (balance > 0) ? '+' : '') + balance.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
}


export function getAuthHeader() {
    return {
        'secret-header': 'default-fake-token'
    };
}