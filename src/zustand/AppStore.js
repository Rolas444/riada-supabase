import { create } from "zustand";
import {devtools, persist } from "zustand/middleware";
import { createUserSlice } from "./UserSlice";
import { createTaskSlice } from "./TaskSlice";

export const useAppStore = create(
    devtools(
        persist(
            (...a) =>({
                ...createUserSlice(...a),
                ...createTaskSlice(...a)
            }),
            {name: 'app-store'}
        )
    )
)