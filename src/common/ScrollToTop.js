import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = props => {
    useEffect(() => {
        if (!window.location.hash) {
            if (props.location.pathname.split('/')[1] !== 'performance') {
                document.documentElement.scrollTop = 0;
            }
        }
    });

    return props.children;
}
  
export default withRouter(ScrollToTop);