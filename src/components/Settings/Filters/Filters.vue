<!--suppress JSUnresolvedVariable -->
<template>
  <v-content>
    <Checkbox
      label="settings.exclude-dupes"
      v-bind:initialCheckboxValue="settings.excludeDupes"
      @change="settings.excludeDupes = $event"
    />
    <Slider
      label="settings.max-items"
      v-bind:min="1"
      v-bind:max="30"
      v-bind:initial-slider-value="settings.maxItems"
      v-bind:formatter="'{value}'"
      @change="settings.maxItems = $event"
    />
    <Slider
      label="settings.max-days"
      v-bind:min="1"
      v-bind:max="180"
      v-bind:initial-slider-value="settings.maxDays"
      v-bind:formatter="'{value}'"
      @change="settings.maxDays = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Slider from "../../Common/Slider";
import Checkbox from "../../Common/Checkbox";

export default {
  name: "Filters",
  components: { Checkbox, Slider, SettingButtons },
  data() {
    return {
      settings: {
        maxItems: this.$store.state.settings.maxItems,
        maxDays: this.$store.state.settings.maxDays,
        excludeDupes: this.$store.state.settings.excludeDupes
      }
    };
  },
  methods: {
    reset() {
      this.$emit("reset", this.settings);
    },
    update() {
      this.$emit("update", this.settings);
    }
  }
};
</script>
