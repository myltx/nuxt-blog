export default defineEventHandler(async () => {
  const res = await $fetch('https://open.iciba.com/dsapi/?callback=callback_1317', {
    method: 'GET',
  })
  return res
})
