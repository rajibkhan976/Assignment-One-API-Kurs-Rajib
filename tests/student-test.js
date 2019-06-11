const sinon = require('sinon');

const mongoose = require('mongoose');
mongoose.set('debug', true);
require('sinon-mongoose');

const app = require('../index.js');

const agent = require('supertest').agent(app);

const expect = require('chai').expect;

const Student = mongoose.model('Student');

var studentMock = sinon.mock(Student);

beforeEach(() => {
	console.log('beforeeach');
	studentMock.restore();
});

afterEach(() => {
	console.log('aftereach');
	studentMock.verify();
});

describe('Bong-bong integration tests', () => {
	
	const request = {
		"students":
		{
			"address": 
			{
			"road":"PG 12",
			"zipcode":"350 50",
			"city":"Helsingborg"
			},
			"_id":"1z",
			"email":"jonas@gmail.com",
			"name":"Jonas"
		}
	};
	
	const expected = {
		"students":
		{
			"address":
			{
				"road":"PG 12",
				"zipcode":"350 50",
				"city":"Helsingborg"
			},
				"_id":"1z",
				"email":"jonas@gmail.com",
				"name":"Jonas"
		},
				"_id":"5cee41f900086810b836b19a",
				"__v":0
				};
				
	describe('student.get', () => {
		
		it('Should return an array of all students', (done) => {
			studentMock
			.expects('find')
			.chain('exec')
			.resolves([expected]);
			
			agent
			.get('/students')
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
		});
		
		it('Should return a student by name', (done) => {
			studentMock
			.expects('findOne')
			.withArgs({"students.name": "Jonas"})
			.chain('exec')
			.resolves(expected);
			
			agent
			.get('/students?name=Jonas')
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	});
});