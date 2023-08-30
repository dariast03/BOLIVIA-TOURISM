import { error } from '@sveltejs/kit';

export async function load({ params }) {

    return {
        ciudad: params.ciudad
    };

    throw error(404, 'Not found');
}
