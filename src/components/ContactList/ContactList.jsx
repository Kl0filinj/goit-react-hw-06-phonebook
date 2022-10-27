import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector, filterSelector } from 'redux/selectors';
import { deleteTask } from 'redux/taskSlice';
// import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector(tasksSelector);
  const filterQuery = useSelector(filterSelector);
  const visibleList = tasksList.filter(item =>
    item.name.toLowerCase().includes(filterQuery)
  );
  console.log(visibleList);
  console.log(filterQuery);
  return (
    <ul>
      {visibleList.length !== 0 ? (
        visibleList.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name} || </span>
            <span> {number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteTask(id))}
              style={{ margin: 10 + 'px' }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h2>It`s empty here ^_^</h2>
      )}
    </ul>
  );
};

// ContactList.propTypes = {
//   contactsList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
