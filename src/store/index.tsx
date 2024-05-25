import { atom } from 'jotai'

// 默认的测试播放音乐素材
export const footage = { imagUrl: '/conclusion.jpeg', audioUrl: '@/store/Im-sorry.mp3' }

// 碟片的旋转状态
export const diskRotationAtom = atom(false)