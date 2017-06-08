
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { persistStore } from 'redux-persist';
import { Link } from 'react-router';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import '../../../public/assets/css/style.css';
import { browserHistory } from 'react-router';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';


function mapStateToProps(state) {
    return {
        AUTH_TOKEN: state.TokenReducer.auth_token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        rmTOKEN: () => { Store.dispatch(TokenMiddlware.RemoveToken()) }
    }
}

class DashboardComp extends React.Component {

    logout() {
        this.props.rmTOKEN();
        browserHistory.push('/admin');
    }

    componentWillMount() {

        persistStore(Store, {}, () => {
            if (this.props.AUTH_TOKEN === '') {
                browserHistory.push('/admin');
                // console.log(this.props.AUTH_TOKEN );
            }
        });
    }

    render() {
        // console.log(this.props.AUTH_TOKEN );
        //cannot come on this page using browser back button
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (
            <div className="wrapper">

                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <a href="" className="simple-text">
                            Saylani Welfare
				        </a>
                    </div>

                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="active">
                                <Link to={{ pathname: '/admin/dashboard' }}>
                                    <i className="material-icons">dashboard</i>
                                    <p className="colorrr">Dashboard</p>
                                </Link>
                            </li>
                            <li >
                                <Link to={{ pathname: '/admin/createProgram' }}>
                                    <i className="material-icons">location_on</i>
                                    <p>Create Program</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createBatch' }}>
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Batch</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createcourse' }}>
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Course</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createquiz' }}>
                                    <i className="material-icons">person</i>
                                    <p>Create Quiz</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '#' }}>
                                    <i className="material-icons text-gray">notifications</i>
                                    <p>Notifications</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="main-panel">

                    <nav className="navbar navbar-transparent navbar-absolute">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Dashboard</a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    {/*button*/}
                                    <button onClick={this.logout.bind(this)} className="btn btn-primary btn-round">Logout</button>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="orange">
                                            <i className="material-icons">content_copy</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4</p>
                                            <h3 className="title">250<small>Students</small></h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-danger">warning</i> <a href="#pablo">Get More Space...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="green">
                                            <i className="material-icons">store</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.1</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">date_range</i> Last 24 Hours
									</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="red">
                                            <i className="material-icons">info_outline</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.2</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Tracked from Github
									        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="blue">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.3</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">update</i> Just Updated
									        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="blue">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.4</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">update</i> Just Updated
									        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="green">
                                            <div className="ct-chart" id="dailySalesChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Daily Sales</h4>
                                            <p className="category"><span className="text-success"><i className="fa fa-long-arrow-up"></i> 55%  </span> increase in today sales.</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
									</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="orange">
                                            <div className="ct-chart" id="emailsSubscriptionChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Email Subscriptions</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> campaign sent 2 days ago
									</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="red">
                                            <div className="ct-chart" id="completedTasksChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Completed Tasks</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> campaign sent 2 days ago
									</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card card-nav-tabs">
                                        <div className="card-header" data-background-color="purple">
                                            <div className="nav-tabs-navigation">
                                                <div className="nav-tabs-wrapper">
                                                    <span className="nav-tabs-title">Tasks:</span>
                                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                                        <li className="">
                                                            <a href="#profile" data-toggle="tab">
                                                                <i className="material-icons">bug_report</i>
                                                                Bugs
                                                                <div className="ripple-container"></div></a>
                                                        </li>
                                                        <li className="">
                                                            <a href="#messages" data-toggle="tab">
                                                                <i className="material-icons">code</i>
                                                                Website
                                                                <div className="ripple-container"></div></a>
                                                        </li>
                                                        <li className="">
                                                            <a href="#settings" data-toggle="tab">
                                                                <i className="material-icons">cloud</i>
                                                                Server
													            <div className="ripple-container"></div></a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="profile">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="messages">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="settings">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="col-lg-6 col-md-12">
                                    <div className="card">
                                        <div className="card-header" data-background-color="orange">
                                            <h4 className="title">Employees Stats</h4>
                                            <p className="category">New employees on 15th September, 2016</p>
                                        </div>
                                        <div className="card-content table-responsive">
                                            <table className="table table-hover">
                                                <tbody className="text-warning"> 
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Salary</th>
                                                    <th>Country</th>
                                                    </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td>Niger</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td>Curaçao</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Sage Rodriguez</td>
                                                        <td>$56,142</td>
                                                        <td>Netherlands</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Philip Chaney</td>
                                                        <td>$38,735</td>
                                                        <td>Korea, South</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>

                    {/*<footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Company
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Portfolio
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Blog
								</a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="copyright pull-right">
                                &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
					</p>
                        </div>
                    </footer>*/}

                </div>

            </div>
        );
    }
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComp)
