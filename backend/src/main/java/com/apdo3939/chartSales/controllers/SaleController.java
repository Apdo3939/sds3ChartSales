package com.apdo3939.chartSales.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apdo3939.chartSales.dtos.SaleDTO;
import com.apdo3939.chartSales.dtos.SalesSuccessDTO;
import com.apdo3939.chartSales.dtos.SalesSumDTO;
import com.apdo3939.chartSales.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;

	@GetMapping
	ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> page = service.findAll(pageable);
		return ResponseEntity.ok(page);
	}
	
	@GetMapping(value = "/amount-by-seller")
	ResponseEntity<List<SalesSumDTO>> amountGroupedBySeller() {
		List<SalesSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-seller")
	ResponseEntity<List<SalesSuccessDTO>> successGroupedBySeller() {
		List<SalesSuccessDTO> list = service.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}

}
