<template>
  <v-container>
    <div class="container">
      <v-card>
        <v-card-title class="header">
          <div class="title">Arquivo: Vídeos</div>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="videos" :search="search" class="elevation-1" items-per-page-text="itens por página" pageText='{0}-{1} de {2}'>
          <template v-slot:[`item.actions`]="{ item }">
            <div class="icons">
              <v-icon small class="mr-2" @click="openEditModal(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="openDeleteModal(item)">
                mdi-delete
              </v-icon>
            </div>
          </template>
        </v-data-table>
      </v-card>
      <v-btn class="btnGreen btnAdd" rounded="0" @click="openAddModal">+ ADICIONAR VÍDEOS</v-btn>
    </div>

    <!-- Modal for Add/Edit Video -->
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field class="pb-0" v-model="editedItem.name" label="Título"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="pb-0" v-model="editedItem.description" label="Descrição"></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <p>Vídeos</p>
                <UploadVideos />
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class='action'>
          <v-btn class="btnCancel" rounded="0" text @click="closeDialog">Cancelar</v-btn>
          <v-btn class="btnGreen" rounded="0" text @click="saveItem">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Modal for Delete Confirmation -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Excluir</v-card-title>
        <v-card-text>
          Você realmente deseja excluir o vídeo <strong>{{ deletedItem.description }}</strong>?
        </v-card-text>
        <v-card-actions class='action'>
          <v-btn class="btnCancel" rounded="0" text @click="closeDeleteDialog">Cancelar</v-btn>
          <v-btn class="btnGreen" rounded="0" text @click="deleteItemConfirmed">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import UploadVideos from './UploadVideos.vue'

export default {
  data() {
    return {
      search: '',
      dialog: false,
      deleteDialog: false,
      dialogTitle: '',
      editedItem: {
        name: '',
        description: ''
      },
      deletedItem: null,
      headers: [
        { title: 'Título', align: 'start', value: 'name'},
        { title: 'Descrição', value: 'description' },
        { title: 'Última Alteração', value: 'updateDate' },
        { title: '', value: 'actions',  align: 'center', sortable: false }
      ],
      videos: [
          {
            name: 'Instruções',
            description: 'Instruções importantes',
            updateDate: "03/04/2024 - 21:48",
          },
          {
            name: 'Instruções 2',
            description: 'Instruções importantes',
            updateDate: "04/04/2024 - 21:48",
          },
          {
            name: 'Recordações',
            description: 'Recordações importantes',
            updateDate: "05/04/2024 - 21:48",
          }
      ],
      editedIndex: -1,
      defaultItem: {
        name: '',
        description: ''
      },
    };
  },
  methods: {
    openAddModal() {
      this.dialogTitle = 'Adicionar Vídeos';
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },
    openEditModal(item) {
      this.dialogTitle = 'Editar Vídeos';
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    openDeleteModal(item) {
      this.deletedItem = item;
      this.deleteDialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    closeDeleteDialog() {
      this.deleteDialog = false;
    },
    saveItem() {
      if (this.dialogTitle === 'Adicionar Vídeos') {
        this.videos.push(Object.assign({}, this.editedItem));
      } else {
        const index = this.videos.findIndex(i => i.description === this.editedItem.description);
        if (index !== -1) {
          Object.assign(this.videos[index], this.editedItem);
        }
      }
      this.closeDialog();
    },
    deleteItemConfirmed() {
      const index = this.videos.findIndex(i => i.description === this.deletedItem.description);
      if (index !== -1) {
        this.videos.splice(index, 1);
      }
      this.closeDeleteDialog();
    },
  },  
  components: { UploadVideos }
};
</script>
<style scoped>
.v-card {
  display: flex;
  flex-direction: column;
}
.action {
  align-self: center;
}
.v-card {
  display: flex;
  flex-direction: column;
}
.v-card-title {
  display: flex;
}
.container {
  display: flex;
  flex-direction: column;
}
.v-data-table {
  white-space: nowrap;
}
.icons {
  display:flex;
  justify-content: center;
}
.v-card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnGreen {
  display: block;
  color: #fff;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  padding: 5px 15px;
  transition: all 0.25s ease;
  text-transform: uppercase;
  background-color: #91C141;
}
.btnGreen:hover {
  background-color: #6d9232;
}
.btnCancel {
  display: block;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  padding: 5px 15px;
  transition: all 0.25s ease;
  text-transform: uppercase;
}
.btnAdd {
  align-self: flex-end;
  margin-top: 16px;
}
@media screen and (max-width: 767px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header .v-text-field {
    width: 100%;
  }
  .title {
    padding-bottom: 16px;
  }
  .btnAdd {
    align-self: center;
  }
}
</style>