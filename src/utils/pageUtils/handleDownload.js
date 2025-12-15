export const handleDownloadCV = () => {
  // Use the correct file name with proper encoding for spaces
  const cvUrl = '/AbhirupRoyCV.pdf'

  // Fetch the file first to ensure it exists
  fetch(cvUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('CV file not found')
      }
      return response.blob()
    })
    .then((blob) => {
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob)

      // Create a temporary link element
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'Abhirup_Roy_CV.pdf' // The name the file will be downloaded as

      // Append to document, click, and cleanup
      document.body.appendChild(link)
      link.click()

      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    })
    .catch((error) => {
      console.error('Error downloading CV:', error)
      alert('Error downloading CV. Please try again.')
    })
}
