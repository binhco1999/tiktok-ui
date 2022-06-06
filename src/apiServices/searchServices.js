import * as request from '~/utils/request';
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        //trả về thẳng mảng chứa kết quả tìm kiếm
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
