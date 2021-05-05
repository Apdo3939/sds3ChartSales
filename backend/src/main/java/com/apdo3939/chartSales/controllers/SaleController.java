package com.apdo3939.chartSales.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apdo3939.chartSales.dtos.SaleDTO;
import com.apdo3939.chartSales.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;

	@GetMapping
	ResponseEntity<List<SaleDTO>> findAll() {
		List<SaleDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
