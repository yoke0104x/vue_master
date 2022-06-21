import { reactive, toRefs } from "vue";

const useRequest = (request, params, options) => {
    const state = reactive({
        data: [],
        loading: false,
        error: null,
    });

    const fetch = async data => {
        state.loading = true;
        try {
            const res = await request({ ...params, ...data });
            state.data = res.data;
            state.loading = false;
        } catch (e) {
            state.error = e;
        }
    };

    if (!options?.manual) {
        fetch().then(r => {});
    }

    const run = async () => {
        await fetch();
    };

    return {
        ...toRefs(state),
        run,
    };
};
export default useRequest;
