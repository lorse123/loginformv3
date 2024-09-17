import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';

const SomeComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const token = useSelector((state: RootState) => state.token.token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.20.30.47:9191/api/form/all', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default SomeComponent;
