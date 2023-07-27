import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ulid } from 'ulid'

interface SubnetState {
  ip: string
  mask: string
  hostRequirements: Requirement[]
  networkInfo?: NetworkInfo | null
}

export interface SubnetStore extends SubnetState {
  setIp: (newip: string) => void
  setMask: (newmask: string) => void
  addHostRequirements: () => void
  removeHostRequirement: (id: string) => void
  updateHostRequirement: (id: string, updatedData: Partial<Requirement>) => void
  setnetworkInfo: (netInfo?: NetworkInfo) => void
}

export const useSubnetStore = create<SubnetStore>()(
  persist(
    (set, get) => ({
      ip: '',
      mask: '24',
      hostRequirements: [],
      setIp: (newip: string) => set({ ip: newip }),
      setMask: (newmask: string) => set({ mask: newmask }),
      addHostRequirements: () => {
        const hosts = get().hostRequirements
        // console.log("hosts",hosts)
        set({
          hostRequirements: [
            ...hosts,
            {
              hosts: 1,
              name: 'Net ' + (hosts.length + 1),
              id: ulid()
            } as Requirement
          ]
        })
      },
      removeHostRequirement: (id) =>
        set({
          hostRequirements: [
            ...get().hostRequirements.filter((x) => x.id !== id)
          ]
        }),
      updateHostRequirement: (id, updatedData) =>
        set({
          hostRequirements: [
            ...get().hostRequirements.map((req) => {
              if (req.id === id)
                return {
                  ...req,
                  ...updatedData
                }
              return req
            })
          ]
        }),
      setnetworkInfo: (netInfo?: NetworkInfo) =>
        set({
          networkInfo: netInfo
            ? {
                ...netInfo
              }
            : null
        })
    }),
    {
      name: 'subnet-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
