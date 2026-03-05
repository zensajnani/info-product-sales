// Analytics Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ROI Calculator
    const dealValue = document.getElementById('dealValue');
    const dmCount = document.getElementById('dmCount');
    const costValue = document.getElementById('costValue');
    const conversionValue = document.getElementById('conversionValue');
    const revenueValue = document.getElementById('revenueValue');
    const roiValue = document.getElementById('roiValue');

    function calculateROI() {
        const deal = parseFloat(dealValue.value) || 0;
        const dms = parseFloat(dmCount.value) || 0;
        
        const cost = dms * 0.015;
        const conversions = Math.floor(dms * 0.051); // 5.1% conversion rate
        const revenue = conversions * deal;
        const roi = cost > 0 ? ((revenue - cost) / cost * 100).toFixed(0) : 0;
        
        costValue.textContent = `$${cost.toFixed(2)}`;
        conversionValue.textContent = conversions;
        revenueValue.textContent = `$${revenue.toLocaleString()}`;
        roiValue.textContent = `${roi}%`;
    }

    if (dealValue && dmCount) {
        dealValue.addEventListener('input', calculateROI);
        dmCount.addEventListener('input', calculateROI);
        calculateROI();
    }

    // Animate metrics on load
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(el => {
        const finalValue = el.textContent;
        const isPercentage = finalValue.includes('%');
        const hasDecimal = finalValue.includes('.');
        const isCurrency = finalValue.includes('$');
        
        let numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
        let duration = 1500;
        let startTime = null;
        
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = (currentTime - startTime) / duration;
            
            if (progress > 1) progress = 1;
            
            let currentValue = numericValue * easeOutQuart(progress);
            
            if (isCurrency) {
                el.textContent = '$' + currentValue.toFixed(2);
            } else if (hasDecimal) {
                el.textContent = currentValue.toFixed(1) + (isPercentage ? '%' : '');
            } else {
                el.textContent = Math.floor(currentValue).toLocaleString();
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.textContent = finalValue;
            }
        }
        
        requestAnimationFrame(animate);
    });

    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    // Heatmap cell hover effect
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '1';
        });
        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
        });
    });

    // Date range change handler
    const dateRange = document.querySelector('.date-range');
    if (dateRange) {
        dateRange.addEventListener('change', function() {
            // Simulate data refresh
            document.body.style.cursor = 'wait';
            setTimeout(() => {
                document.body.style.cursor = 'default';
                // In a real app, this would fetch new data
            }, 500);
        });
    }

    // Chart bar animation
    setTimeout(() => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.opacity = '1';
            }, index * 50);
        });
    }, 500);

    // Export button
    const exportBtn = document.querySelector('.header-actions .btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Demo: In production, this would download a CSV/Excel report');
        });
    }
});
