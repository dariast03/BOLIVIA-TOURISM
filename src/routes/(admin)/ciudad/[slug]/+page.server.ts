import { error } from '@sveltejs/kit';

export async function load({ params }) {

    return {
        slug: params.slug
    };

    throw error(404, 'Not found');
}
