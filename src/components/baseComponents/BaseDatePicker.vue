<template>
  <v-col>
    <v-row>
      <v-menu
        ref="menu"
        v-model="datePicker"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="date"
            :label="dateLabel"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-on="on"
            :rules="dateRules"
            required
          />
        </template>
          <v-date-picker
            v-if="datePicker"
            no-title
            full-width
            locale="ru-ru"
            @change="changeDate($event)"
            :max="withTimePicker ? '' : maxDate"
            :min="withTimePicker ? maxDate : ''"
          />
      </v-menu>
    </v-row>
    <v-row v-if="withTimePicker">
      <v-menu
        ref="menu"
        v-model="timePicker"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="time"
            label="Время приема"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-on="on"
            :rules="timeRules"
            required
          />
        </template>
        <v-time-picker
          v-if="timePicker"
          full-width
          format="24hr"
          @change="changeTime($event)"
          :min="minTime"
        />
      </v-menu>
    </v-row>
  </v-col>
</template>

<script>
import { parseDate } from '@/helpers'

export default {
  name: 'base-date-picker',
  props: {
    date: String,
    time: String,
    dateLabel: {
      type: String,
      default: 'Дата рождения'
    },
    dateRules: {
      type: Array,
      default: () => []
    },
    timeRules: {
      type: Array,
      default: () => []
    },
    withTimePicker: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      datePicker: false,
      timePicker: false,
    }
  },
  computed: {
    maxDate() {
      const date = new Date();
      return date.toISOString().substr(0, 10);
    },
    minTime() {
      const currentDate = parseDate(Date.now(), false, true)
      if (this.date === currentDate) return parseDate(Date.now(), true)
      return '00:00'
    }
  },
  methods: {
    changeDate(date) {
      this.$emit('change-date', date)
      this.datePicker = false
    },
    changeTime(time) {
      if (!this.date) {
        this.$emit('change-time', time)
        this.changeDate(
          parseDate(Date.now(), false, true)
        )
        this.timePicker = false
      }
      this.$emit('change-time', time)
      this.timePicker = false
    },
  },
}
</script>