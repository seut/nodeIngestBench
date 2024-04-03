function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function randomDouble() {
  return Math.random();
}

function randomString(base, min, max) {
  return base + (min + Math.floor(Math.random() * (max - min)));
}

function randomStringFromArray(array) {
  return array[randomInt(0, array.length)];
}

function getGenericBMSData (extraTagsLength = 0) {

	const time = Date.now() + randomInt(-5, 15);

  const genericBMSDataObj = {


	master_packet_timestamp: time,
    timestamp: time,
    schema_version: randomString('username',1,100),
    packet_id: randomInt(1,100),
    scooter_id: randomString('username',1,100),
    vehicle_identification_number: randomString('username',1,100),
    scooter_state: randomString('username',1,100),
    kwhr_charged_discharged_mode: randomDouble(),
    total_regen_amhr: randomDouble(),
    amhr_accumulated_current_cycle: randomDouble(),
    balancing_temp_pdu: randomDouble(),
    battery_current: randomDouble(),
    battery_pack_effective_temp: randomDouble(),
    battery_pack_temp1: randomDouble(),
    battery_pack_temp2: randomDouble(),
    battery_pack_temp3: randomDouble(),
    battery_pack_temp4: randomDouble(),
    battery_pack_temp5: randomDouble(),
    battery_pack_temp6: randomDouble(),
    bms_dcdcoutput_voltage: randomDouble(),
    bms_mode: randomInt(1,100),
    bus_voltage: randomDouble(),
    cell_voltage_min: randomDouble(),
    cell_voltage_max: randomDouble(),
    charge_amhr_bms00: randomDouble(),
    charge_mode_mbms: randomInt(1,100),
    charge_mode_vehicle: randomInt(1,100),
    cycle_number: randomInt(1,100),
    discharge_amphr_bms00: randomDouble(),
    chargetime_max: randomInt(1,100),
    kwhr_accumulated_current_cycle: randomDouble(),
    max_cell_dev_charge: randomDouble(),
    max_cell_dev_discharge: randomDouble(),
    measured_cell1_voltage: randomDouble(),
    measured_cell2_voltage: randomDouble(),
    measured_cell3_voltage: randomDouble(),
    measured_cell4_voltage: randomDouble(),
    measured_cell5_voltage: randomDouble(),
    measured_cell6_voltage: randomDouble(),
    measured_cell7_voltage: randomDouble(),
    measured_cell8_voltage: randomDouble(),
    measured_cell9_voltage: randomDouble(),
    measured_cell10_voltage: randomDouble(),
    measured_cell11_voltage: randomDouble(),
    measured_cell12_voltage: randomDouble(),
    measured_cell13_voltage: randomDouble(),
    measured_cell14_voltage: randomDouble(),
    charge_stop_during_charge_count: randomInt(1,100),
    stops_during_drive_count: randomInt(1,100),
    balancing_started_due_deviation_count: randomInt(1,100),
    pack_voltage: randomDouble(),
    pdu_temp1: randomDouble(),
    pdu_temp_afe: randomDouble(),
    pack_soc: randomDouble(),
    pack_soh: randomDouble(),
    time_charge80_fc: randomInt(1,100),
    time_charge_optimum_fc: randomInt(1,100),
    time_charge80_sc: randomInt(1,100),
    time_charge_optimum_sc: randomInt(1,100),
    time_charge_full_sc: randomInt(1,100),
    total_active_duration_mode: randomInt(1,100),
    total_amhr_cons_continous_slot: randomDouble(),
    amhr_charged_discharged_mode: randomDouble(),
    total_balancing_duration: randomInt(1,100),
    total_charge_time: randomInt(1,100),
    total_kwhr_cons_continous_slot: randomString('username',1,100),
    soh_resistance: randomDouble(),
	generic_bms_data: {bms_bool_debug3: randomDouble(),
    bms_debug1: randomDouble(),
    bms_bool_debug4: randomDouble(),
    bms_debug2: randomDouble(),
    bms_debug5: randomDouble(),
    bms_debug6: randomDouble(),
	},
    balancing_temp: randomDouble(),
    amhr_lost_during_balancing: randomDouble(),
    max_cell_deviation_observed_during_charge: randomDouble(),
    max_cell_deviation_observed_during_discharge: randomDouble(),
    overall_charge_voltage_limit: randomDouble(),
    display_soc: randomInt(1,100),
    bms00_cell_balancing_temperature: randomDouble(),
    discharge_power_limit00: randomDouble(),
    charge_current_limit00: randomDouble(),
    discharge_current_limit00: randomDouble(),
    charge_voltage_limit00: randomDouble(),
    bms00_pdu_delta_temperature: randomDouble(),
    vehicle_software_version: randomString('username',1,100),
    overall_discharge_current_limit: randomDouble(),
    overall_charge_current_limit: randomDouble(),
    charging_voltage_available_range: randomDouble(),
    charging_current_availablerange: randomDouble(),
    battery_voltage_deviation_error: randomDouble(),
    charging_rate: randomDouble(),
    soc_val_from_min_ocv: randomDouble(),
    soc_debug1: randomDouble(),
    factored_discharge_amphr: randomDouble(),
    factored_charge_amphr: randomDouble(),
    serial_number: randomString('username',1,100),
    evse_identification_low_byte: randomString('username',1,100),
    evse_identification_high_byte: randomString('username',1,100),
    discharge_mode: randomDouble(),
    packet_type: randomInt(1,100),
    bms_debug1: randomDouble(),
    bms_debug2: randomDouble(),
    bms_bool_debug3: randomDouble(),
    bms_bool_debug4: randomDouble(),
    bms_debug5: randomDouble(),
    bms_debug6: randomDouble(),
    smd_pct_ecm_soc: randomDouble(),
    smd_pct_estimated_soc: randomDouble(),
    soh_array1: randomDouble(),
    soh_array2: randomDouble(),
    soh_array3: randomDouble(),
    soh_array4: randomDouble(),
    soh_array5: randomDouble(),
    estimated_ttc_array_1: randomInt(1,100),
    estimated_ttc_array_2: randomInt(1,100),
    estimated_ttc_array_3: randomInt(1,100),
    estimated_ttc_array_4: randomInt(1,100),
    estimated_ttc_array_5: randomInt(1,100),
    estimated_ttc_array_6: randomInt(1,100),
    audit_details: {master_packet_timestamp: time,
    packet_timestamp: time,
    clientid: randomString('clientid',1,100),
    mqtt_timestamp: time,
    processing_start_timestamp: time,
    k2_timestamp: time,
    k1_timestamp: time,
    username: randomString('username',1,100),
	},
  };

  return genericBMSDataObj;
}


function getGenericBMSDataBulkArray(num, extraTagsLength = 0) {
  const objs = new Array(num).fill({});
  return objs.map(() => Object.values(getGenericBMSData(extraTagsLength)));
}

module.exports = {
  getGenericBMSDataBulkArray,
  getGenericBMSData,
};
