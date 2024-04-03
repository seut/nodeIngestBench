function getDropTable(tableName) {
  return `DROP TABLE IF EXISTS ${tableName};`;
}

function getCreateTable(tableName, shards, replicas) {
  return `CREATE TABLE IF NOT EXISTS ${tableName} (
    "master_packet_timestamp" TIMESTAMP WITH TIME ZONE,
    "timestamp" TIMESTAMP WITH TIME ZONE,
    "schema_version" TEXT,
    "packet_id" BIGINT,
    "scooter_id" TEXT,
    "vehicle_identification_number" TEXT,
    "scooter_state" TEXT,
    "kwhr_charged_discharged_mode" REAL,
    "total_regen_amhr" REAL,
    "amhr_accumulated_current_cycle" REAL,
    "balancing_temp_pdu" REAL,
    "battery_current" REAL,
    "battery_pack_effective_temp" REAL,
    "battery_pack_temp1" REAL,
    "battery_pack_temp2" REAL,
    "battery_pack_temp3" REAL,
    "battery_pack_temp4" REAL,
    "battery_pack_temp5" REAL,
    "battery_pack_temp6" REAL,
    "bms_dcdcoutput_voltage" REAL,
    "bms_mode" INTEGER,
    "bus_voltage" REAL,
    "cell_voltage_min" REAL,
    "cell_voltage_max" REAL,
    "charge_amhr_bms00" REAL,
    "charge_mode_mbms" INTEGER,
    "charge_mode_vehicle" INTEGER,
    "cycle_number" INTEGER,
    "discharge_amphr_bms00" REAL,
    "chargetime_max" INTEGER,
    "kwhr_accumulated_current_cycle" REAL,
    "max_cell_dev_charge" REAL,
    "max_cell_dev_discharge" REAL,
    "measured_cell1_voltage" REAL,
    "measured_cell2_voltage" REAL,
    "measured_cell3_voltage" REAL,
    "measured_cell4_voltage" REAL,
    "measured_cell5_voltage" REAL,
    "measured_cell6_voltage" REAL,
    "measured_cell7_voltage" REAL,
    "measured_cell8_voltage" REAL,
    "measured_cell9_voltage" REAL,
    "measured_cell10_voltage" REAL,
    "measured_cell11_voltage" REAL,
    "measured_cell12_voltage" REAL,
    "measured_cell13_voltage" REAL,
    "measured_cell14_voltage" REAL,
    "charge_stop_during_charge_count" INTEGER,
    "stops_during_drive_count" INTEGER,
    "balancing_started_due_deviation_count" INTEGER,
    "pack_voltage" REAL,
    "pdu_temp1" REAL,
    "pdu_temp_afe" REAL,
    "pack_soc" REAL,
    "pack_soh" REAL,
    "time_charge80_fc" INTEGER,
    "time_charge_optimum_fc" INTEGER,
    "time_charge80_sc" INTEGER,
    "time_charge_optimum_sc" INTEGER,
    "time_charge_full_sc" INTEGER,
    "total_active_duration_mode" INTEGER,
    "total_amhr_cons_continous_slot" REAL,
    "amhr_charged_discharged_mode" REAL,
    "total_balancing_duration" INTEGER,
    "total_charge_time" INTEGER,
    "total_kwhr_cons_continous_slot" TEXT,
    "soh_resistance" REAL,
    "generic_bms_data" OBJECT(DYNAMIC) AS (
      "BMS_Bool_Debug3" DOUBLE PRECISION,
      "BMS_Debug1" DOUBLE PRECISION,
      "BMS_Bool_Debug4" DOUBLE PRECISION,
      "BMS_Debug2" DOUBLE PRECISION,
      "BMS_Debug5" DOUBLE PRECISION,
      "BMS_Debug6" DOUBLE PRECISION
    ),
    "balancing_temp" REAL,
    "amhr_lost_during_balancing" REAL,
    "max_cell_deviation_observed_during_charge" REAL,
    "max_cell_deviation_observed_during_discharge" REAL,
    "overall_charge_voltage_limit" REAL,
    "display_soc" INTEGER,
    "bms00_cell_balancing_temperature" REAL,
    "discharge_power_limit00" REAL,
    "charge_current_limit00" REAL,
    "discharge_current_limit00" REAL,
    "charge_voltage_limit00" REAL,
    "bms00_pdu_delta_temperature" REAL,
    "vehicle_software_version" TEXT,
    "overall_discharge_current_limit" REAL,
    "overall_charge_current_limit" REAL,
    "charging_voltage_available_range" REAL,
    "charging_current_availablerange" REAL,
    "battery_voltage_deviation_error" REAL,
    "charging_rate" REAL,
    "soc_val_from_min_ocv" REAL,
    "soc_debug1" REAL,
    "factored_discharge_amphr" REAL,
    "factored_charge_amphr" REAL,
    "serial_number" TEXT,
    "evse_identification_low_byte" TEXT,
    "evse_identification_high_byte" TEXT,
    "discharge_mode" REAL,
    "packet_type" INTEGER,
    "bms_debug1" REAL,
    "bms_debug2" REAL,
    "bms_bool_debug3" REAL,
    "bms_bool_debug4" REAL,
    "bms_debug5" REAL,
    "bms_debug6" REAL,
    "smd_pct_ecm_soc" REAL,
    "smd_pct_estimated_soc" REAL,
    "soh_array1" REAL,
    "soh_array2" REAL,
    "soh_array3" REAL,
    "soh_array4" REAL,
    "soh_array5" REAL,
    "estimated_ttc_array_1" INTEGER,
    "estimated_ttc_array_2" INTEGER,
    "estimated_ttc_array_3" INTEGER,
    "estimated_ttc_array_4" INTEGER,
    "estimated_ttc_array_5" INTEGER,
    "estimated_ttc_array_6" INTEGER,
    "audit_details" OBJECT(DYNAMIC) AS (
      "master_packet_timestamp" BIGINT,
      "packet_timestamp" BIGINT,
      "clientid" TEXT,
      "mqtt_timestamp" BIGINT,
      "processing_start_timestamp" BIGINT,
      "k2_timestamp" BIGINT,
      "k1_timestamp" BIGINT,
      "username" TEXT
    ),
    "ingestion_timestamp" TIMESTAMP WITH TIME ZONE GENERATED ALWAYS AS current_timestamp,
    "partition_timestamp" TIMESTAMP WITH TIME ZONE GENERATED ALWAYS AS date_trunc('day', "timestamp")
  ) CLUSTERED INTO ${shards} SHARDS
    PARTITIONED BY ("partition_timestamp")
    WITH (number_of_replicas = '${replicas}');`;
}

function getInsert(tableName) {
  return `INSERT INTO ${tableName} (master_packet_timestamp, timestamp, schema_version, packet_id, `
          + `scooter_id, vehicle_identification_number, scooter_state, kwhr_charged_discharged_mode, total_regen_amhr, `
          + `amhr_accumulated_current_cycle, balancing_temp_pdu, battery_current, battery_pack_effective_temp, `
          + `battery_pack_temp1, battery_pack_temp2, battery_pack_temp3, battery_pack_temp4, battery_pack_temp5, battery_pack_temp6, `
          + `bms_dcdcoutput_voltage, bms_mode, bus_voltage, cell_voltage_min, cell_voltage_max, charge_amhr_bms00, `
          + `charge_mode_mbms, charge_mode_vehicle, cycle_number, discharge_amphr_bms00, chargetime_max, kwhr_accumulated_current_cycle, `
          + `max_cell_dev_charge, max_cell_dev_discharge, measured_cell1_voltage, measured_cell2_voltage, measured_cell3_voltage, `
          + `measured_cell4_voltage, measured_cell5_voltage, measured_cell6_voltage, measured_cell7_voltage, measured_cell8_voltage, `
          + `measured_cell9_voltage, measured_cell10_voltage, measured_cell11_voltage, measured_cell12_voltage, measured_cell13_voltage, `
          + `measured_cell14_voltage, charge_stop_during_charge_count, stops_during_drive_count, balancing_started_due_deviation_count, `
          + `pack_voltage, pdu_temp1, pdu_temp_afe, pack_soc, pack_soh, time_charge80_fc, time_charge_optimum_fc, time_charge80_sc, `
          + `time_charge_optimum_sc, time_charge_full_sc, total_active_duration_mode, total_amhr_cons_continous_slot, `
          + `amhr_charged_discharged_mode, total_balancing_duration, total_charge_time, total_kwhr_cons_continous_slot, soh_resistance, `
          + `generic_bms_data, balancing_temp, amhr_lost_during_balancing, max_cell_deviation_observed_during_charge, `
          + `max_cell_deviation_observed_during_discharge, overall_charge_voltage_limit, display_soc, bms00_cell_balancing_temperature, `
          + `discharge_power_limit00, charge_current_limit00, discharge_current_limit00, charge_voltage_limit00, `
          + `bms00_pdu_delta_temperature, vehicle_software_version, overall_discharge_current_limit, overall_charge_current_limit, `
          + `charging_voltage_available_range, charging_current_availablerange, battery_voltage_deviation_error, charging_rate, `
          + `soc_val_from_min_ocv, soc_debug1, factored_discharge_amphr, factored_charge_amphr, serial_number, `
          + `evse_identification_low_byte, evse_identification_high_byte, discharge_mode, packet_type, bms_debug1, `
          + `bms_debug2, bms_bool_debug3, bms_bool_debug4, bms_debug5, bms_debug6, smd_pct_ecm_soc, smd_pct_estimated_soc, `
          + `soh_array1, soh_array2, soh_array3, soh_array4, soh_array5, estimated_ttc_array_1, estimated_ttc_array_2, `
          + `estimated_ttc_array_3, estimated_ttc_array_4, estimated_ttc_array_5, estimated_ttc_array_6, audit_details) `
          + `VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, `
          + `?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, `
          + `?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
}

function getRefreshTable(tableName) {
  return `REFRESH TABLE ${tableName};`;
}

module.exports = {
  getCreateTable,
  getDropTable,
  getInsert,
  getRefreshTable,
};
