import Icon from '@ailibs/feather-react-ts'

export function Section1() {
    return (
        <div className="row">
            <div className="col-xl-6 col-xxl-5 d-flex">
                <div className="w-100">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">Sales</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="stat text-primary">
                                                <Icon name='truck' />
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="mt-1 mb-3">2.382</h1>
                                    <div className="mb-0">
                                        <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">Visitors</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="stat text-primary">
                                                <Icon name='users' />
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="mt-1 mb-3">14.212</h1>
                                    <div className="mb-0">
                                        <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">Earnings</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="stat text-primary">
                                                <Icon name='dollar-sign' />
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="mt-1 mb-3">$21.300</h1>
                                    <div className="mb-0">
                                        <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">Orders</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="stat text-primary">
                                                <Icon name='shopping-cart' />
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="mt-1 mb-3">64</h1>
                                    <div className="mb-0">
                                        <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-xxl-7">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                        <div className="chart chart-sm">
                            <canvas id="chartjs-dashboard-line"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
