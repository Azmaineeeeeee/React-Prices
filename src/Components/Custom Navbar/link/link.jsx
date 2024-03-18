import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li key={route.id} className="mr-20 hover:bg-blue-700 p-4">
                    <a href={route.path}> {route.name}</a>
                   
                </li>
    );
};

Link.propTypes = {
    route: PropTypes.object,
    id: PropTypes.string,
    name: PropTypes.string
}

export default Link;