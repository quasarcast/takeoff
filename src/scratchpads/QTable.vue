<script setup>
const rows = [
  {
    id: 1,
    name: 'Luke Diebold',
    email: 'luke@quasarcast.com'
  },
  {
    id: 2,
    name: 'Panda',
    email: 'panda@quasarcast.com'
  },
  {
    id: 3,
    name: 'Lily',
    email: 'lily@quasarcast.com'
  },
  {
    id: 4,
    name: 'Shannen',
    email: 'shannen@quasarcast.com'
  }
]

const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id'
  },
  {
    name: 'Name',
    label: 'Name',
    field: 'name',
    align: 'left'
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left'
  }
]
</script>

<template>
  <div class="q-pa-lg">
    <q-table
      :rows="rows"
      :columns="columns"
    />
  </div>
</template>
