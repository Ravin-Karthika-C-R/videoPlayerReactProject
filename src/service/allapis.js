import {BASE_URL} from "./baseUrl"

import {commonApi} from "./commonStructure"


//add video
export const addVideo=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,body)

}

// get video
export const getVideo=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})

}

//delete video

export const removeVideo=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`,{})
}

//add category
export const addCategory=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/categories`,body)

}

// get category
export const getCategory=async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,{})

}

//delete category

export const removeCategory=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${id}`,{})
}

//add history
export const addHistory=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/histories`,body)
}

// get history
export const getHistory=async()=>{
    return await commonApi('GET',`${BASE_URL}/histories`,{})

}

//remove history

export const removeHistory=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/histories/${id}`,{})
}

//drag and drop
// get single video
export const getSingleVideo=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/videos/${id}`)
}

// update category
export const updateCategory=async(id,body)=>{
    return await commonApi('PUT',`${BASE_URL}/categories/${id}`,body)
}

//singlecategory page
export const getSingleCategoryVideos=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/categories/${id}`)
}


// update category
export const updateCatagories=async(id,body)=>{
    return await commonApi('PUT',`${BASE_URL}/categories/${id}`,body)
}
