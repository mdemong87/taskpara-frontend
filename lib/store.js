import { create } from 'zustand'

export const useStore = create((set) => ({
    //loading state manage
    loading: false,
    setLoading: (loader) => set({ loading: loader }),

    //search state manage
    search: '',
    setsearch: (s) => set({ search: s }),

    //for toggleing asideber
    asideShow: false,
    setasideShow: (aside) => set({ asideShow: aside }),

    // modal show and hide
    modalShow: false,
    setmodalShow: (modal) => set({ modalShow: modal }),
    deletemodalShow: false,
    setdeletemodalShow: (modal) => set({ deletemodalShow: modal }),
    updatemodalShow: false,
    setupdatemodalShow: (modal) => set({ updatemodalShow: modal }),


    //decliration the state for handle the task data 
    title: '',
    settitle: (t) => set({ title: t }),
    priority: 'Low',
    setpriority: (p) => set({ priority: p }),
    stage: 'Brief',
    setstage: (s) => set({ stage: s }),
    dis: '',
    setdis: (d) => set({ dis: d }),


}))
