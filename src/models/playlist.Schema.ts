import * as yup from 'yup';

const playlistSchema = yup.object().shape({
  title: yup.string().required('title is required!'),
  duration: yup.string().required('duration is required!'),
  releasedDate: yup.string().required('releasedDate is required'),
  genres: yup.string().required('genres is required'),
});

export default playlistSchema;
