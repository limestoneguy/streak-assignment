type DashboardInfo = {
    error: {
        status: boolean,
        message: string
    }
}

export enum DashboardActions {

}

export const INITIAL_DASHBOARD_STATE: DashboardInfo = {
    error: {
        status: false,
        message: ''
    }
}

export const handleDashboardActions = (state: DashboardInfo, action: DashboardActions) => {
    return state;
}