<template>
<div>
  <div class="container">
    <div v-for="(url, index) in imageUrls" :key="index" class="image-container"
    @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = -1">
    <div class="image-wrapper">
        <video class="video" :src="url" height="100" width="100" controls></video>
        <div class="overlay" v-show="hoveredIndex === index" @click="removeFile(index)">
        <v-icon small class="delete-icon">mdi-close</v-icon>
        </div>
    </div>
    <p class="name">{{ truncateName(imageNames[index]) }}</p>
    </div>

  </div>
  <v-container>
    <v-row class="btn-upload-wrapper">
      <v-btn color="#617A95" icon @click="pickFile">
        <v-icon>mdi-paperclip</v-icon>
      </v-btn>
      <input
        type="file"
        ref="image"
        accept="video/mp4, video/avi, video/mpeg, video/quicktime, video/webm, video/x-matroska"
        @change="onFilePicked"
        style="display: none;"
        multiple
      />
    </v-row>
  </v-container>
</div>

</template>

<script>
export default {
  data() {
    return {
      imageUrls: [],
      imageFiles: [],
      imageNames: [],
      hoveredIndex: -1
    };
  },
  methods: {
    async pickFile() {
      this.$refs.image.click();
    },
    async onFilePicked(e) {
      const files = Array.from(e.target.files);
      for (const file of files) {
        if (this.validateFile(file)) {
          const fr = new FileReader();
          fr.onload = async (event) => {
            let url = event.target.result;
            this.imageUrls.push(url);
            this.imageFiles.push(file);
            this.imageNames.push(file.name);
          };
          fr.readAsDataURL(file);
        }
      }
    },
    removeFile(index) {
      this.imageUrls.splice(index, 1);
      this.imageFiles.splice(index, 1);
      this.imageNames.splice(index, 1);
    },
    isImage(index) {
      const file = this.imageFiles[index];
      return file.type.startsWith('image/');
    },
    openDocument(index) {
      const file = this.imageFiles[index];
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    },
    isVideo(url) {
      return url.startsWith('data:video');
    },
    truncateName(name) {
      return name.length > 17 ? name.substring(0, 15) + '...' : name;
    },
    validateFile(file) {
      const allowedFileTypes = [
        'video/mp4',
        'video/avi',
        'video/mpeg',
        'video/quicktime',
        'video/webm',
        'video/x-matroska'
      ];
      const maxFileSize = 10 * 1024 * 1024; // Tamanho máximo do arquivo em bytes (10 MB)
      if (!allowedFileTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed.`);
        return false;
      }
      if (file.size > maxFileSize) {
        alert(`O arquivo ${file.name} é muito grande. O tamanho máximo permitido é de ${maxFileSize / (1024 * 1024)} MB.`);
        return false;
      }
      return true;
    },
    resolveImageUrl(index) {
      const file = this.imageFiles[index];
      if (file.type === 'application/pdf') {
        return this.pdfIcon;
      } else if (file.type === 'application/msword') {
        return this.wordIcon;
      } else if (file.type === 'application/vnd.ms-excel') {
        return this.excelIcon;
      }
      return this.imageUrls[index];
    }
  }
}
</script>

<style scoped>
  .btn-upload-wrapper {
    justify-content: center;
  }
.image-container {
  position: relative;
  display: inline-block;
  margin: 5px;
  text-align: center;
}
.image-wrapper {
  position: relative;
  display: inline-block;
}
.video {
    background-color: #F1F1F1;
}
.name {
    font-size: 12px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.overlay:hover {
  opacity: 1;
}
.delete-icon {
  color: white;
  position: absolute;
  top: 0;
  right: 0px;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 767px) {
    .container {
        justify-content: space-between;
    }
}
</style>