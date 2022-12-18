export function handleAPIError(err) {
    switch (err.code) {
        case 403:
            alert('Log out user')
            break;
    
        default:
            break;
    }
}