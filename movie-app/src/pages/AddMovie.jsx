import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovies, saveMovies } from '../utils/localStorage';

const schema = Yup.object({
    title: Yup.string().required(),
    director: Yup.string().required(),
    genre: Yup.string().required(),
    year: Yup.number().min(1901).required(),
    rating: Yup.number().min(1).max(10).required(),
});

export default function AddMovie() {
    const navigate = useNavigate();

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
            <Formik
                initialValues={{ title: '', director: '', genre: '', year: '', rating: '', synopsis: '' }}
                validationSchema={schema}
                onSubmit={(values) => {
                    const newMovie = { ...values, id: Date.now().toString() };
                    const updated = [...getMovies(), newMovie];
                    saveMovies(updated);
                    toast.success('Movie Added!');
                    navigate('/');
                }}
            >
                <Form className="flex flex-col gap-3">
                    <label>Title <Field name="title" className="border p-2 rounded w-full" /></label>
                    <ErrorMessage name="title" component="div" className="text-red-500" />
                    <label>Director <Field name="director" className="border p-2 rounded w-full" /></label>
                    <ErrorMessage name="director" component="div" />
                    <label>Genre <Field name="genre" className="border p-2 rounded w-full" /></label>
                    <ErrorMessage name="genre" component="div" />
                    <label>Year <Field type="number" name="year" className="border p-2 rounded w-full" /></label>
                    <ErrorMessage name="year" component="div" />
                    <label>Rating <Field type="number" name="rating" className="border p-2 rounded w-full" /></label>
                    <ErrorMessage name="rating" component="div" />
                    <label>Synopsis <Field name="synopsis" className="border p-2 rounded w-full" /></label>
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Movie</button>
                </Form>
            </Formik>
        </div>
    );
}
