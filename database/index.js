'use strict'
import config from '../config'
import { v1 as neo4j } from 'neo4j-driver'
const { HOST, PASSWORD, PORT, USER } = config.default

let _driver
export function driver () {
  if (_driver) return _driver
  else _driver = neo4j.driver(`bolt://${HOST}:${PORT}`, neo4j.auth.basic(USER, PASSWORD))
  return _driver
}

let _session
export default function session () {
  if (_session) return _session
  else _session = driver().session()
  return _session
}
