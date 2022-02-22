import React, { Component } from 'react';
import './leftNav.css';
import SettingsNav from './SettingsNav';
import DashboardNav from './DashboardNav';
import TaskNav from './TaskNav';
import ChatsNav from './ChatsNav';
import {Capitalize} from '../../../classes/FormatSlug'


export default class LeftNav extends Component {
    render() {
        const renderSliderNav = () => {
            let titleName = window.location.pathname
            if (titleName === '/admin') {
                document.title = 'Dashboard';
            }else{
                let title = titleName.replace("/admin/", "");

                document.title = Capitalize(title);
            }
            let { showModal} = this.props;
            switch (window.location.pathname) {
                case '/admin/settings' :
                case '/admin/localization':
                case '/admin/email-settings':
                case '/admin/salary-settings':
                case '/admin/change-password':
                case '/admin/theme-settings':
                case '/admin/invoice-settings':
                case '/admin/notifications-settings':
                case '/admin/roles-permissions':
                case '/admin/leave-type':
                    return <SettingsNav />
                case '/admin/tasks':
                    return <TaskNav showModal={showModal}/>
                case '/admin/chat':
                case '/admin/voice-call':
                case '/admin/video-call':
                case '/admin/Incoming-call':
                    return <ChatsNav showModal={showModal}/>
                default:
                    return <DashboardNav showModal={showModal}/>
            }
        }
        return (
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <div>
                            {renderSliderNav()}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
