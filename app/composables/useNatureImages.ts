import { ref, computed } from 'vue'
import { natureImagesFetcher } from '~/repository/modules/nature-images'
import type { ExploreImageResponse } from '~/utils/data-type'

export function useNatureImages() {
  const images = ref<ExploreImageResponse[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const config = useRuntimeConfig()
  const fetcher = natureImagesFetcher()

  const normalizeNatureImage = (item: any): ExploreImageResponse => {
    let url = item.thumbnail_path || ''
    if (!url && item.filename) {
      url = `/uploads/nature-images/${item.filename}`
    }
    if (url && url.startsWith('/') && !url.startsWith('//')) {
      const baseUrl = config.public.apiBase
      if (baseUrl) {
        url = baseUrl + url
      }
    }
    const title = item.title || ''
    const name = item.original_name || item.name || item.filename || ''
    const size = item.size || 0
    const type = item.mime_type || item.type || ''
    const id = item.id || ''
    const created_at = item.created_at || item.createdAt || ''
    const updated_at = item.updated_at || item.updatedAt || ''
    const filename = item.filename
    const original_name = item.original_name
    const mime_type = item.mime_type
    const thumbnail_path = item.thumbnail_path
    const alt_text = item.alt_text
    const sort_order = item.sort_order
    const is_active = item.is_active

    return {
      id,
      url,
      name,
      title,
      size,
      type,
      created_at,
      updated_at,
      filename,
      original_name,
      mime_type,
      thumbnail_path,
      alt_text,
      sort_order,
      is_active,
    }
  }

  const refresh = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await fetcher.getAll({ page: 1, limit: 100 })
      const normalized = response.data.map(normalizeNatureImage)
      images.value = normalized
    } catch (err: any) {
      const message = err.response?._data?.message || err.message || 'Failed to load images'
      error.value = message
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const addImages = async (files: File[]) => {
    loading.value = true
    error.value = null
    try {
      const result = await fetcher.bulkCreate({ images: files })
      console.log('bulkCreate result', result)
      await refresh()
    } catch (err: any) {
      const message = err.response?._data?.message || err.message || 'Failed to upload images'
      error.value = message
      console.error(err)
      throw new Error(message)
    } finally {
      loading.value = false
    }
  }

  const deleteImage = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      await fetcher.deleteById(id)
      images.value = images.value.filter(img => img.id !== id)
    } catch (err: any) {
      const message = err.response?._data?.message || err.message || 'Failed to delete image'
      error.value = message
      console.error(err)
      throw new Error(message)
    } finally {
      loading.value = false
    }
  }

  const clearAll = async () => {
    if (images.value.length === 0) return
    loading.value = true
    error.value = null
    try {
      await fetcher.bulkDelete({ ids: images.value.map(img => img.id) })
      images.value = []
    } catch (err: any) {
      const message = err.response?._data?.message || err.message || 'Failed to delete all images'
      error.value = message
      console.error(err)
      throw new Error(message)
    } finally {
      loading.value = false
    }
  }

  const totalCount = computed(() => images.value.length)
  const totalSize = computed(() => images.value.reduce((sum, img) => sum + (img.size || 0), 0))

  return {
    images,
    loading,
    error,
    refresh,
    addImages,
    deleteImage,
    clearAll,
    totalCount,
    totalSize,
  }
}